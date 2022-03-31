import datetime as dt
import matplotlib.pyplot as plt
import pandas_datareader as web

ma_1 = 5
ma_2 = 100

start = dt.datetime.now() - dt.timedelta(days=365)
end = dt.datetime.now()

data = web.DataReader('eth-usd', 'yahoo', start, end)
data[f'SMA_{ma_1}'] = data['Adj Close'].rolling(window=ma_1).mean()
data[f'SMA_{ma_2}'] = data['Adj Close'].rolling(window=ma_2).mean()

data = data.iloc[ma_2:]

# plt.plot(data['Adj Close'], label="Share Price", color="blue")
# plt.plot(data[f'SMA_{ma_1}'], label=f'SMA_{ma_1}', color="orange")
# plt.plot(data[f'SMA_{ma_2}'], label=f'SMA_{ma_2}', color="purple")
# plt.legend(loc="upper left")
# plt.show()

buy_signals = []
sell_signals = []
trigger = -1

buy_price = 0
sell_price = 0
gain = 0
total_gain = 0

for x in range(len(data)):
    if data[f'SMA_{ma_1}'].iloc[x] > data[f'SMA_{ma_2}'].iloc[x] and trigger \
            != 1:
        buy_signals.append(data['Adj Close'].iloc[x])
        print("Bought--------  " + str(data['Adj Close'].iloc[x]))
        sell_signals.append(float('nan'))
        buy_price = float(data['Adj Close'].iloc[x])
        trigger = 1
    elif data[f'SMA_{ma_1}'].iloc[x] < data[f'SMA_{ma_2}'].iloc[x] and \
            trigger != -1:
        buy_signals.append(float('nan'))
        sell_signals.append(data['Adj Close'].iloc[x])
        print("Sold----------  " + str(data['Adj Close'].iloc[x]))
        sell_price = float(data['Adj Close'].iloc[x])
        gain = sell_price - buy_price
        total_gain += gain
        print("Gain-----  " + str(gain))
        trigger = -1
    else:
        buy_signals.append(float('nan'))
        sell_signals.append(float('nan'))

print("Total Profit---------------------  " + str(total_gain))

data['Buy Signals'] = buy_signals
data['Sell Signals'] = sell_signals

print(data)

plt.plot(data['Adj Close'], label="Share Price", alpha=0.5)
plt.plot(data[f'SMA_{ma_1}'], label=f'SMA_{ma_1}', color="orange",
         linestyle="--")
plt.plot(data[f'SMA_{ma_2}'], label=f'SMA_{ma_2}', color="pink",
         linestyle="--")
plt.scatter(data.index, data['Buy Signals'], label="Buy Signal", marker="^",
            color="#00ff00", lw=3)
plt.scatter(data.index, data['Sell Signals'], label="Sell Signal", marker="v",
            color="#ff0000", lw=3)

plt.legend(loc="upper left")
plt.show()

print(total_gain)
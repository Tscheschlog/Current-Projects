import pandas as pd
from binance.client import Client
import numpy as np
from pandas.tseries.offsets import MonthBegin

client = Client()

info = client.get_exchange_info()

symbols = [x['symbol'] for x in info['symbols']]
relevant = [symbol for symbol in symbols if symbol.endswith('USDT')]


def getmonthlydata(symbol):
    frame = pd.DataFrame(client.get_historical_klines(symbol, '1M',
                                                      '2019-01-01',
                                                      '2021-12-31'))
    if len(frame) > 0:
        frame = frame[[0, 4]]
        frame.columns = ['Time', symbol]
        frame = frame.set_index('Time')
        frame.index = pd.to_datetime(frame.index, unit='ms')
        frame = frame.astype(float)
        return frame


dfs = []

for coin in relevant:
    dfs.append(getmonthlydata(coin))

mergeddf = pd.concat(dfs, axis=1)

ret_df = mergeddf.pct_change()

logret_df = np.log(ret_df + 1)


def top_ret(window, top_n, date):
    ret_wd = logret_df.rolling(window).sum()
    ret_s = ret_wd.loc[date]
    top_performers = ret_s.nlargest(top_n)
    perf_ret = ret_df.loc[top_performers.name + MonthBegin(1),
                          top_performers.index].mean()
    return perf_ret


matrix = []
profits = []

windows = range(1, 13)

for window in windows:
    for date in ret_df.index[1:-1]:
        profits.append(top_ret(window, 5, date))
    matrix.append(profits)
    profits = []

all_months = pd.DataFrame(matrix, index=windows)

print((all_months + 1).prod(axis=1) - 1)

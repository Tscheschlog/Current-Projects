import os
from binance.client import Client
from binance import ThreadedWebsocketManager
import pprint
from time import sleep
import talib
import numpy
kline_closed_values = []
RSI_MIN_PERIOD = 2  # usually 14, but to test lets use 2 to reduce waiting time

TEST_NET = True


def handle_kline_message(candle_msg):
    pprint.pprint(f"kline message type: {candle_msg['e']}")
    pprint.pprint(candle_msg)
    kline = candle_msg['k']   # access the key 'k'
    is_kline_closed = kline['x']   # if true, then its end of current kline
    kline_close_value = kline['c']  # last or closing ETH value


def buy_and_sell_ETH_at_BTC():
    while True:
        # error check to make sure WebSocket is working
        if btc_price['error']:
            # stop and restart socket (cleanup)
            twm.stop()
            sleep(2)
            twm.start()
            btc_price['error'] = False
        else:
            if 1000 < btc_price['BTCUSDT'] < 40000:  # bitcoin price
                try:
                    print("Buying when BTCUSDTprice:", btc_price['BTCUSDT'])
                    order = client.order_market_buy(symbol='ETHUSDT',
                                                    quantity=1)
                    pprint.pprint(order)
                    break
                except Exception as e:
                    print(e)
                    break
            else:
                try:
                    print("Selling when BTCUSDT price:", btc_price['BTCUSDT'])
                    order = client.order_market_sell(symbol='ETHUSDT',
                                                     quantity=1)
                    pprint.pprint(order)
                    break
                except Exception as e:
                    print(e)
                    break
            sleep(0.1)


# Get the BTC value in the last 24 hrs
def btc_values_received(msg):
    """ Process the btc values received in the last 24 hrs """

    pprint.pprint(msg)

    if msg['e'] != 'error':
        print(msg['e'])
        btc_price['BTCUSDT'] = float(msg['c'])
    else:
        btc_price['error'] = True


def main():
    twm.start()
    twm.start_kline_socket(callback=handle_kline_message,
                           symbol=symbol, interval='1m')
    twm.join()  # main will exit if no join added


if __name__ == "__main__":
    if TEST_NET:
        # passkey (saved in bashrc for linux)
        api_key = os.environ.get \
                (
                'zLNx0wU3Q7yt0W7PWXEI0ADjpOBAmbzL3FcaOdu0nvNQ5ZrtYrurQT4XDdPtM0rq')

        # secret (saved in bashrc for linux)
        api_secret = os.environ.get \
                (
                'aSowweiCsBVUHLNP1Z57o8VaJLyNxLcibr4LUWWkxJ3J7cGdr8hwFE2P3hsnXfYC')

        client = Client(api_key, api_secret, testnet=True)
        print("Using Binance TestNet server")
    twm = ThreadedWebsocketManager()

    symbol = 'ETHUSDT'
    # 'ETHUSDT' can be changed say to say (BNBUSDT)

    main()

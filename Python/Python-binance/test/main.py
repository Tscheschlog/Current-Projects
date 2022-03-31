from binance.client import Client
import os
import time
import sys

# init ------------------------------------------------------------------------

# Binance Client API
api_key = os.environ.get('binance_api')
api_secret = os.environ.get('binance_secret')
client = Client(api_key, api_secret)

# Set Current Price of Coin in USD
eth = client.get_symbol_ticker(symbol="ETHUSDT")
curr_price = float(eth['price'])
start_price = curr_price
g_percent_change = 0

# Starting Money and Behavior - WIP
money = 1000.0
my_eth = 0
flip = False


# -----------------------------------------------------------------------------


# FUNCTIONS -----------------------------------------------------------------

def convert_to_money(last_price):

    global g_percent_change, money, my_eth
    money = my_eth * last_price
    my_eth = 0


def convert_to_eth(last_price):

    global g_percent_change, money, my_eth
    my_eth = money / last_price
    money = 0


def buy_or_sell(price):

    global flip
    if flip:
        convert_to_money(price)
        flip = False

    else:
        convert_to_eth(price)
        flip = True


def display_portfolio():

    global my_eth, money
    print("Total Balance: " + str(money))
    print("Total ETH: " + str(my_eth) + "\n")


def output_starting_price_change(start, percent, is_negative):
    if is_negative:
        print("Starting Value Of Coin: " + str(start) + "\n" +
              "Percent Change on Day: " + "-" + str(format(percent, ".6f")
                                                    + "\n"))
    else:
        print("Starting Value Of Coin: " + str(start) + "\n" +
              "Percent Change on Day: " + str(format(percent, ".6f")
                                              + "\n"))


def starting_price_change(last_price):
    global g_percent_change

    if last_price < start_price:

        g_percent_change = float(abs(last_price - start_price) /
                                 start_price * 100)
        output_starting_price_change(start_price, g_percent_change, True)

    else:
        g_percent_change = float((last_price - start_price) / start_price
                                 * 100)
        output_starting_price_change(start_price, g_percent_change, False)


# ----------------------------------------------------------------------------


# Report Price Loop ---- Exit on 'Ctrl-C' --------- Run in CMD --------------

try:

    while True:
        last_price = curr_price

        # Fetches new Price for btc
        eth = client.get_symbol_ticker(symbol="ETHUSDT")
        curr_price = float(eth['price'])

        percent_change = (curr_price - last_price) / last_price * 100

        if percent_change > 0:
            print("INCREASED: ")

        elif percent_change == 0:
            print("NO CHANGE: ")

        else:
            print("DECREASED: ")

        print("Current Price: " + str(curr_price) + "\n")

        buy_or_sell(curr_price)
        display_portfolio()

        print("Percent change since last price: " +
              str(format(percent_change, ".6f")))

        starting_price_change(curr_price)

        time.sleep(10)

        print("-----------------------------------------------------------")

except KeyboardInterrupt:
    pass

# ----------------------------------------------------------------------------

import yfinance as yf
import pandas as pd
import datetime as dt
import matplotlib.pyplot as plt


data = yf.Ticker("AMZN")
print(data.info['dividendRate'])

# # Get the data===============================================================
# data = yf.download(ticker, start_date, end_date)
#
# # Plot adjusted close price data
# data['Adj Close'].plot()
# plt.show()
# ============================================================================

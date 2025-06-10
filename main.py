import pandas as pd
from sklearn.preprocessing import MinMaxScaler

df = pd.read_csv('data/bottle.csv' , low_memory = False)
df = df[['Salnty', 'T_degC', 'O2ml_L', 'Depthm']]
df = df.dropna()
df.columns = ['Salinity', 'Temp', 'Oxygen', 'Depth']

df = df.iloc[:500]

# This is a synthetic health score 

df['HealthScore'] = (
    0.3 * df['Oxygen'] -
    0.2 * df['Salinity'] -
    0.1 * abs(df['Temp'] - 15) -
    0.05 * df['Depth']
)

print(df['HealthScore'].describe())

scaler = MinMaxScaler(feature_range=(0,100))
df['HealthScoreScaled'] = scaler.fit_transform(df[['HealthScore']])

df.to_csv('data/cleaned.csv', index = False)


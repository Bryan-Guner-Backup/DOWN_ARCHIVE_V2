from datetime import datetime

import pytz
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

from app.data import Data


class Model:

    def __init__(self, data_api: Data):
        df = data_api.read()
        target = df["Rarity"]
        features = df.drop(columns=["Rarity"])
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            features,
            target,
            test_size=0.20,
            stratify=target,
            random_state=42,
        )
        self.total = data_api.count
        self.total_trained = self.y_train.shape[0]
        self.total_tested = self.y_test.shape[0]
        self.model = RandomForestClassifier(
            n_jobs=-1,
            random_state=42,
            n_estimators=99,
        )
        self.name = str(self.model).split('(')[0]
        lambda_time = pytz.timezone('US/Pacific')
        start_time = datetime.now(lambda_time)
        self.model.fit(self.X_train, self.y_train)
        stop_time = datetime.now(lambda_time)
        self.duration = stop_time - start_time
        self.time_stamp = stop_time.strftime('%Y-%m-%d %H:%M:%S')

    def __call__(self, feature_basis):
        prediction, *_ = self.model.predict([feature_basis])
        probability, *_ = self.model.predict_proba([feature_basis])
        return prediction, max(probability)

    @property
    def info(self):
        output = (
            f"Model: {self.model}",
            f"Time Stamp: {self.time_stamp}",
            f"Testing Score: {100 * self.score():.3f}%",
            f"Total Row Count: {self.total}",
            f"Training Row Count: {self.total_trained}",
            f"Testing Row Count: {self.total_tested}",
            f"Time to Train: {self.duration}",
        )
        return "\n".join(output)

    def score(self):
        return self.model.score(self.X_test, self.y_test)

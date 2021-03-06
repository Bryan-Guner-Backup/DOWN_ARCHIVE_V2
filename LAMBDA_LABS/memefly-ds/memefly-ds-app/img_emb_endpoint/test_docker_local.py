import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.inception_v3 import preprocess_input
import numpy as np
import json
import requests


SAMPLE_IMG = "./cyber-musk.jpg"
SERVER_URL = "http://localhost:8080/invocations"
LOCAL_MODEL = "/home/han/memefly-ds-app/img_emb_endpoint/inceptionv3_embeddings/1"

def load_img_to_array(*, imgfile:str) -> np.ndarray:
    img = load_img(imgfile, target_size=(299, 299))
    img = img_to_array(img)
    img = img.reshape((1, img.shape[0], img.shape[1], img.shape[2]))
    img = preprocess_input(img)

    return img

def ref_output(*, model_dir:str, img:np.array) -> list:
    loaded = tf.saved_model.load(model_dir)
    infer_key = list(loaded.signatures.keys())
    infer = loaded.signatures[infer_key[0]]
    out = infer(tf.constant(img))['global_average_pooling2d']

    return out

def main():
    """
    adopted from
    https://github.com/tensorflow/serving/blob/master/tensorflow_serving/example/resnet_client.py
    """
    img = load_img_to_array(imgfile=SAMPLE_IMG)
    img = img.tolist()

    predict_request = f'{{"instances" : {img}}}'

    for _ in range(3):
        response = requests.post(SERVER_URL, data=predict_request)
        response.raise_for_status()

    total_time = 0
    num_requests = 10
    for _ in range(num_requests):
        response = requests.post(SERVER_URL, data=predict_request)
        response.raise_for_status()
        total_time += response.elapsed.total_seconds()
        prediction = response.json()['predictions']

    ref_pred = ref_output(model_dir=LOCAL_MODEL, img=img)
    out = np.all(ref_pred==prediction)
    print(f'Same Response as Local Model: {out}, output shape: {np.array(prediction).shape}, avg latency: {total_time*1000/num_requests} ms')


if __name__ == "__main__":
    main()

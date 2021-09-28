# Big Data

What if your data doesn’t fit in memory?

My advice: Try to “scale up” (use a server with more memory) before you try to “scale out” (use distributed computing frameworks).

If you’re looking at frameworks, try something lightweight like [Dask](https://docs.dask.org/en/latest/spark.html) before something heavy-duty like Spark. 

If you’re fitting models, figure out whether more data is actually useful:

1. Read ["More data or better models?"](http://technocalifornia.blogspot.com/2012/07/more-data-or-better-models.html) by Xavier Amatriain, based on his experience leading ML Engineering at Netflix.
2. Read about [Learning curves in Scikit-Learn](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Learning-curves-in-Scikit-Learn) in _Python Data Science Handbook_ by Jake VanderPlas.

Then, decide whether to use a smaller sample that does fit in memory, or, try “incremental learning” in [scikit-learn](https://scikit-learn.org/0.15/modules/scaling_strategies.html) or [Dask](https://examples.dask.org/machine-learning/incremental.html).
 
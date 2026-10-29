import os

# Children of the sweep pool inherit this and start BLAS single-threaded.
os.environ.setdefault("OMP_NUM_THREADS", "1")
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")

from blueprints.acoustics.roomwave.study import main

if __name__ == "__main__":
    main()

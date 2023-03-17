FROM zhouwei/rasa

RUN apt-get update

# Install python3
RUN apt-get install python3

# Install pip
RUN apt-get install wget vim
RUN wget -O /tmp/get-pip.py https://bootstrap.pypa.io/get-pip.py
RUN python3 /tmp/get-pip.py
RUN pip install --upgrade pip

# Install other libs
RUN pip install rasa
RUN pip install jieba
RUN pip install transformers

COPY  . /app
WORKDIR /app
EXPOSE 5005

# rasa run --cor "*"
CMD ['rasa', 'run', '--cor "*"']

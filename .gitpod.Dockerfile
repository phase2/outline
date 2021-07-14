FROM gitpod/workspace-full
SHELL ["/bin/bash", "-c"]

RUN sudo apt-get -qq update

# Install nvm
RUN bash -c ". .nvm/nvm.sh && nvm install v16 && nvm alias default v16"

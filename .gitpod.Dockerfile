FROM gitpod/workspace-full

RUN sudo apt-get -qq update

USER gitpod

# Fix node version we develop against
ARG OUTLINE_NODE_VERSION=16
RUN bash -c ". .nvm/nvm.sh \
    && nvm install $OUTLINE_NODE_VERSION"
ENV PATH=/home/gitpod/.nvm/versions/node/v${OUTLINE_NODE_VERSION}/bin:$PATH
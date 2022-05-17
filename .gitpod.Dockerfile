FROM gitpod/workspace-node-lts

RUN sudo apt-get -qq update
RUN sudo apt-get -qq install -y rsync

# Install custom tools, runtime, etc.
RUN npx playwright install-deps

FROM gitpod/workspace-node-lts

RUN sudo apt-get -qq update
RUN sudo apt-get -qq install -y rsync

RUN curl https://bun.sh/install | bash
RUN export BUN_INSTALL="$HOME/.bun"
RUN export PATH="$BUN_INSTALL/bin:$PATH"

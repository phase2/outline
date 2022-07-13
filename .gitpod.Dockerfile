FROM gitpod/workspace-node-lts

RUN sudo apt-get -qq update
RUN sudo apt-get -qq install -y rsync

# Install Playwright dependencies
RUN npx playwright install --with-deps

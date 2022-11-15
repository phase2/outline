FROM gitpod/workspace-node-lts

RUN sudo apt-get -qq update
RUN sudo apt-get -qq install -y rsync

# Install Playwright deps
RUN npx playwright install-deps
RUN npx playwright install

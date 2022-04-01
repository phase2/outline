FROM gitpod/workspace-node

# Install custom tools, runtime, etc.
RUN npx playwright install-deps

# Ensure we are on desired version of Node defined in our .nvmrc.
# For now this is hard coded for simplicity. In the future we will
# want to make this more flexible and use an environment variable.
RUN nvm install 16
RUN nvm use

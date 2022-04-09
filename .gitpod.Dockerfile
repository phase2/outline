FROM gitpod/workspace-node-lts

# Install custom tools, runtime, etc.
RUN npx playwright install-deps

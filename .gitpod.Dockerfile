FROM gitpod/workspace-node

# Install custom tools, runtime, etc.
RUN npx playwright install-deps

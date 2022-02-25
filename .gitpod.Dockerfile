FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN npx playwright install-deps

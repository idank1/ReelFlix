# Installing Node.js

Node.js is required to run this project. Here's how to install it:

## Option 1: Using Homebrew (Recommended for macOS)

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (this includes npm)
brew install node

# Verify installation
node --version
npm --version
```

## Option 2: Download from Official Website

1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

## Option 3: Using nvm (Node Version Manager)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.zshrc

# Install latest LTS Node.js
nvm install --lts
nvm use --lts

# Verify
node --version
npm --version
```

After installing Node.js, come back and we can start the project!


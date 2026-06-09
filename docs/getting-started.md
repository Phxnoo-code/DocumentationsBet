# Getting Started with Mega

Learn how to initialize and configure Mega locally on your system.

## Environment Setup

Ensure you have configured the following variables in your `.env` file before launching:

```ini
PORT=8080
DATABASE_URL="postgresql://postgres:password@localhost:5432/mega"
REDIS_URL="redis://127.0.0.1:6379"
LOG_LEVEL="debug"
```

---

## Installation Commands

Run the make commands to install dependencies and compile the target binary:

```bash
# Clean target build folders
make clean

# Compile in release mode
make build-release

# Run migrations and start the application
make run-server
```

Once running, the API server will listen on `http://localhost:8080/`. You can send a test ping to `http://localhost:8080/api/v1/health` to verify status.

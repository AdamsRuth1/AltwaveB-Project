#!/bin/sh

# Log starting message
echo "Starting FastAPI application..."

# Start the FastAPI application
uvicorn backend.main:app --host 0.0.0.0 --port 8000

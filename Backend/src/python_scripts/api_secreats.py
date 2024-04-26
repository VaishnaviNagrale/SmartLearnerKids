import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access the API_KEY_ASSEMBLYAI variable
api_key = os.getenv("API_KEY_ASSEMBLYAI")

API_KEY_ASSEMBLYAI = api_key
import sys
from api_comm_for_recogi import *

filename = sys.argv[1]
#start from here....
audio_url = upload(filename)
text = save_transcript(filename,audio_url)

print(text)
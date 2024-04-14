import requests
from api_secreats import API_KEY_ASSEMBLYAI
import time

upload_endpint = "https://api.assemblyai.com/v2/upload"
transcript_endpint = "https://api.assemblyai.com/v2/transcript"
headers = {'authorization':API_KEY_ASSEMBLYAI}

#upload
def upload(filename):
    def read_file(filename,chunk_size=5242880):
        with open(filename,'rb') as _file:
            while True:
                data = _file.read(chunk_size)
                if not data:
                    break
                yield data

    upload_response = requests.post(upload_endpint,headers=headers,data=read_file(filename))

    audio_url = upload_response.json()['upload_url']
    return audio_url

#transcribe
def transcribe(audio_url):
    transcribe_request = {"audio_url":audio_url}
    transcribe_response = requests.post(transcript_endpint,json=transcribe_request,headers=headers)
    job_id = transcribe_response.json()['id']
    return job_id

#poll
def poll(transcribe_id):
    polling_endpoint = transcript_endpint + '/' + transcribe_id
    polling_response = requests.get(polling_endpoint,headers=headers)
    return polling_response.json()

def get_transcription_result_url(filename,audio_url):
    transcribe_id = transcribe(audio_url)
    while True:
        data = poll(transcribe_id)
        if data['status'] == 'completed':
            return data , None
        elif data['status'] == 'error':
            return data, data['error']

        # print("Waiting for 30 seconds........")
        time.sleep(30)


def save_transcript(filename,audio_url):
    data,error = get_transcription_result_url(filename,audio_url)
    if error!=None:
        print("ERROR!!",error)
    else:
        recorded_text = data['text']
        if recorded_text is not None:
            return recorded_text
        else:
            print("ERROR: Transcription text not found in response data")

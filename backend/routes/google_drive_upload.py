from fastapi import APIRouter, Request
from pydantic import BaseModel
import os
import json
from datetime import datetime
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

router = APIRouter()

SERVICE_ACCOUNT_FILE = 'bionic-vertex-457319-k5-94424b23a97c.json'
SCOPES = ['https://www.googleapis.com/auth/drive.file']
FOLDER_ID = '1ol8mP1QeI3z-HAiXSKb3dvulisSO8eTJ'

class Cliente(BaseModel):
    nome: str
    cpf: str
    nascimento: str
    ddd: str
    telefone: str
    email: str
    cep: str
    rua: str
    numero: str
    bairro: str
    cidade: str
    estado: str
    complemento: str

@router.post("/upload-json")
def upload_json_drive(cliente: Cliente):
    try:
        # Constrói objeto do cliente
        data = cliente.dict()

        # Cria pasta temporária se não existir
        temp_folder = "temp"
        os.makedirs(temp_folder, exist_ok=True)

        # Gera nome de arquivo temporário
        filename = f"{cliente.nome.upper().replace(' ', '_')}_{datetime.now().strftime('%Y%m%d%H%M%S')}.json"
        filepath = os.path.join(temp_folder, filename)

        # Salva arquivo JSON local
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        # Autentica e inicializa o Google Drive
        creds = service_account.Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE, scopes=SCOPES
        )
        drive_service = build("drive", "v3", credentials=creds)

        # Faz upload
        file_metadata = {"name": filename, "parents": [FOLDER_ID]}
        media = MediaFileUpload(filepath, mimetype="application/json")
        file = drive_service.files().create(
            body=file_metadata, media_body=media, fields="id"
        ).execute()

        # Aguarda o sistema liberar e remove o arquivo temporário
        import time
        time.sleep(0.5)
        os.remove(filepath)

        return {"message": "Upload realizado com sucesso.", "file_id": file.get("id")}

    except Exception as e:
        return {"error": str(e)}

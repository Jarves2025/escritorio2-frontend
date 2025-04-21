from google.oauth2 import service_account
from googleapiclient.discovery import build

# Caminho para sua credencial (ajuste se estiver em outra pasta)
SERVICE_ACCOUNT_FILE = 'bionic-vertex-457319-k5-94424b23a97c.json'
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

# ID da pasta a ser testada
FOLDER_ID = '1ol8mP1QeI3z-HAiXSKb3dvulisSO8eTJ'

def testar_conexao():
    try:
        creds = service_account.Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE, scopes=SCOPES)

        service = build('drive', 'v3', credentials=creds)

        query = f"'{FOLDER_ID}' in parents and trashed = false"
        results = service.files().list(q=query, pageSize=5, fields="files(id, name)").execute()
        items = results.get('files', [])

        print("✅ Conexão com o Google Drive estabelecida.")
        print(f"📁 Pasta ID: {FOLDER_ID}")
        if not items:
            print("📂 A pasta está vazia.")
        else:
            print("🗂 Arquivos encontrados:")
            for item in items:
                print(f"- {item['name']} (ID: {item['id']})")

    except Exception as e:
        print("❌ Erro na conexão com o Google Drive:")
        print(e)

if __name__ == "__main__":
    testar_conexao()

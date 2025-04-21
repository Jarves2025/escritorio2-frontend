from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.google_drive_upload import router as upload_router

app = FastAPI()

# Libera acesso ao frontend (Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Substitua por ["http://localhost:3000"] se quiser limitar
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclui rota do upload
app.include_router(upload_router)

# Execução direta
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

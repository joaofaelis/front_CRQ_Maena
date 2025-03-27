import jwt
from django.http import JsonResponse
from django.conf import settings

class JWTMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        token = request.headers.get('Authorization', None)
        if token:
            try:
                token = token.split(' ')[1]  # Remove 'Bearer ' do token
                decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
                request.user = decoded_token  # Armazena o usuário decodificado no request
            except jwt.ExpiredSignatureError:
                return JsonResponse({"message": "Token has expired"}, status=401)
            except jwt.InvalidTokenError:
                return JsonResponse({"message": "Invalid token"}, status=401)
        return self.get_response(request)

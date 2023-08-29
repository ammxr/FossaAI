from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods

def index(request):
    return render(request,'index.html')

def output(request):
    print("ENTEREDDDDD")
    recommendation = "TEST"  # Placeholder, replace with actual recommendation logic
    return JsonResponse({'recommendation': recommendation})

from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'index.html')

def results(request):
    print("entered simple")
    return "RESPONSE FROM RESULTS FUNCTION IN DJANGO"
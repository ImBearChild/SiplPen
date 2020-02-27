#!/usr/bin/env python3
import os
import subprocess
import shutil 
#from tqdm import tqdm

#cleancss -O2 -o"./css/style.min.css" "./css/style.css" 
#uglifyjs -o

list_js = []
list_css = []
work_dir=os.getcwd()
src_dir=os.getcwd()+"/src"
doc_dir=os.getcwd()+"/docs"

def mkdir(path):
    path=path.strip()
    path=path.rstrip("/")
    path=path.rstrip("\\")
    isExists=os.path.exists(path)
    if not isExists:
        os.makedirs(path) 
        return True
    else:
        return False

mkdir(work_dir+"/docs")
mkdir(work_dir+"/docs/js")
mkdir(work_dir+"/docs/css")

if not os.path.exists(doc_dir):  
    os.makedirs(doc_dir)  

for (root, dirs, files) in os.walk(src_dir+"/",followlinks=False):
    for name in files:
        path = os.path.join(root,name)
        if path.find("/docs/") != -1:
            continue
        if path.find(".min.") != -1 :
            doc_path = doc_dir + path[len(src_dir):]
            print("Copy processed file:" + doc_path)
            mkdir(doc_path[:len(doc_path)-len(name)])
            shutil.copy(path, doc_path) 
            continue
        if path.find(".js") == len(path)-3:
            print("Calling uglifyjs :"+name)
            p = subprocess.Popen(['uglifyjs',"-o",work_dir+"/docs/js/"+name,path], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            #print(p.args)
            #pbar.update()
            while p.poll() is None:
                line = p.stdout.readline()
                line = line.strip()
                if line:
                    if not str(line).find("b'[")==0:
                        #print('Subprogram output: [{}]'.format(line))
                        print(line)
            if p.returncode == 0:
                print('Subprogram success')
            else:
                print('Subprogram failed')
            continue
        if path.find(".css") == len(path)-4:
            print("Calling cleancss :"+name)
            p = subprocess.Popen(['cleancss',"-O2","--skip-rebase","-o",work_dir+"/docs/css/"+name,path], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            #print(p.args)
            #pbar.update()
            while p.poll() is None:
                line = p.stdout.readline()
                line = line.strip()
                if line:
                    if not str(line).find("b'[")==0:
                        #print('Subprogram output: [{}]'.format(line))
                        print(line)
            if p.returncode == 0:
                print('Subprogram success')
            else:
                print('Subprogram failed')
            continue
        if path.find(".html") == len(path)-5 :
            doc_path = doc_dir + path[len(src_dir):]
            print("Copy HTML file:" + doc_path)
            mkdir(doc_path[:len(doc_path)-len(name)])
            shutil.copy(path, doc_path) 
            continue
        if path.find("/fonts/") != -1 :
            doc_path = doc_dir + path[len(src_dir):]
            print("Copy font file:" + doc_path)
            mkdir(doc_path[:len(doc_path)-len(name)])
            shutil.copy(path, doc_path) 
            continue



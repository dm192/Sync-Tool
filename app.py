import flask
from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='dist')

# 静态文件路由
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    # 检查请求的文件是否存在于静态文件夹中
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    # 如果文件不存在，返回主页面（适用于客户端路由）
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
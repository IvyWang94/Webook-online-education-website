from flask import Flask, request, jsonify
import os
import json
from flask_cors import CORS

app = Flask(__name__)
# 允许所有域进行跨域请求
CORS(app)


@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    # 接收表单数据
    name = request.form.get('username_c', default='')
    email = request.form.get('useremail_c', default='')
    message = request.form.get('usertext_c', default='')

    # 创建字典
    contact = {
        "name": name,
        "email": email,
        "message": message
    }

    # 文件路径
    file_path = 'contacts.json'

    # 尝试从文件读取现有数据
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            try:
                array_data = json.load(file)
            except json.JSONDecodeError:
                array_data = []
    else:
        array_data = []

    # 添加新数据
    array_data.append(contact)

    # 将更新后的数据编码成 JSON 并写回文件
    try:
        with open(file_path, 'w', encoding='utf-8') as file:
            json.dump(array_data, file, indent=4, ensure_ascii=False)
        return jsonify({"message": "Submission successful!"}), 200
    except Exception as e:
        return jsonify({"message": "Error saving data", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

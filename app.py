from flask import Flask, request, jsonify
from shopify_ai import run_store_optimization
from fulfillment_router import fulfill_pending_orders

app = Flask(__name__)

@app.route("/")
def index():
    return "✅ ReapSow Flask API is live. Use /run?cmd=optimize"

@app.route("/run", methods=["GET"])
def run_command():
    cmd = request.args.get("cmd", "").strip().lower()
    if cmd == "optimize":
        run_store_optimization()
        return jsonify({"status": "success", "action": "store optimized"})
    elif cmd == "fulfill":
        fulfill_pending_orders()
        return jsonify({"status": "success", "action": "orders fulfilled"})
    else:
        return jsonify({"status": "error", "message": "Unknown command"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)

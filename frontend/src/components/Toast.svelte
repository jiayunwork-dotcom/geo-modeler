<script>
    export let toast;
    import { toasts } from '../stores/index.js';
</script>

<div class="toast toast-{toast.type}">
    {toast.message}
    <button class="close-btn" on:click={() => $toasts = $toasts.filter(t => t.id !== toast.id)}>✕</button>
</div>

<style>
    .toast {
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 13px;
        max-width: 360px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        animation: slideIn 0.3s ease;
    }

    .close-btn {
        background: none;
        color: inherit;
        font-size: 14px;
        padding: 0 4px;
        opacity: 0.6;
    }
    .close-btn:hover { opacity: 1; }

    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
</style>

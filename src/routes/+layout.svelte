<script>
    import "../app.css";
    import Alerts from "$prj/Alerts.svelte";
</script>

<slot />
<div class="absolute top-2 left-[50%]">
<Alerts />
</div>
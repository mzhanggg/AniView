export function clearVisual() {
    const message = d3.select("#message")
    message.remove();
    
    const svg = d3.select('svg');
    svg.remove();
}
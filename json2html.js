export default function json2html(data) {
    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    let html = `<table data-user="gajjebhargavi14@gmail.com">\n`;
    html += "  <thead>\n    <tr>";
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr>\n  </thead>\n  <tbody>\n";

    
    data.forEach(row => {
        html += "    <tr>";
        headers.forEach(header => {
            html += `<td>${row[header] || ""}</td>`;
        });
        html += "</tr>\n";
    });

    html += "  </tbody>\n</table>";
    return html;
}

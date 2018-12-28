function htmlToElement(html, id) {
    var template = document.createElement('template');
    template.id = id;
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    //return template.content.firstChild;
    return template;
}

setTimeout(function () {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if (false && 'content' in document.createElement('template')) {

        var temp = `
                      <tr>
                        <td class="record"></td>
                        <td></td>
                      </tr>
                    `;

        var template = htmlToElement(temp, 'productrow');

        // Instantiate the table with the existing HTML tbody
        // and the row with the template
        var t = template;

        // Clone the new row and insert it into the table
        var tb = document.querySelector("tbody");
        var clone = document.importNode(t.content, true);
        td = clone.querySelectorAll("td");
        td[0].textContent = "1235646565";
        td[1].textContent = "Stuff";

        tb.appendChild(clone);

        // Clone the new row and insert it into the table
        var clone2 = document.importNode(t.content, true);
        td = clone2.querySelectorAll("td");
        td[0].textContent = "0384928528";
        td[1].textContent = "Acme Kidney Beans 2";

        tb.appendChild(clone2);

    } else {
        // Find another way to add the rows to the table because 
        // the HTML template element is not supported.
    }
      
}, 2000);

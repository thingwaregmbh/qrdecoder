/*global $, shopofthingsLogin */
(function() {


      document.addEventListener('DOMContentLoaded', function() {

            const LINE_SEPERATOR = ' ';
            const COL_SEPERATOR = ':';

            const HEADER = [
                  'devEUI',
                  'appEui',
                  'appKey'
            ];

            const btn = document.getElementById('btnConvert');
            const ta = document.getElementById('taContent');
            const divContent = document.getElementById('divContent');


            btn.onclick = () => {

                  $(divContent).empty();

                  let arrLines = ta.value.split(LINE_SEPERATOR);
                  arrLines.forEach((line, index) => arrLines[index] = line.split(COL_SEPERATOR));
                  console.log(arrLines)

                  const table = document.createElement('table');
                  table.className = 'table';
                  const tHead = document.createElement('thead');
                  let tr = document.createElement('tr');
                  HEADER.forEach(col => {
                        const th = document.createElement('th');
                        th.innerHTML = col;
                        th.setAttribute('scope', 'col');
                        tr.appendChild(th);
                  });
                  tHead.appendChild(tr);
                  const tBody = document.createElement('tbody');
                  table.appendChild(tHead);
                  table.appendChild(tBody);

                  arrLines.forEach(item => {
                        const tr = document.createElement('tr');
                        item.forEach(col => {
                              const td = document.createElement('td');
                              td.setAttribute('scope', 'td');
                              td.innerHTML = col;
                              tr.appendChild(td);
                        });
                        tBody.appendChild(tr);
                  });

                  divContent.appendChild(table);
            };

      });






})();

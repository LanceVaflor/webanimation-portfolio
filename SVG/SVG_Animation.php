<html>
        <head>
            <title>SVG Animation</title>
        </head>

        <body>
                <svg width="300" height ="300" style="border:1px solid black; background-color:  rgba(148, 213, 235, 0.651);">

                    <ellipse cx="150" cy="280" rx="8" ry="10" fill="#64EC05" stroke-width="3" stroke="null">
                        <animate
                        attributeName="ry"
                        values="300;30;300"
                        dur="5s"
                        repeatCount="indefinite"
                        /> 
                        </ellipse>
                    <path id="outline" fill="grey" d="M 140 240 L 140 300 L 160 300 L 160 240 L 140 240"/>
                    <rect fill="red" height="12" width="7" y="260" x="143"/>
                    <circle cx="146" cy="255" r="4" fill="#000" stroke="null" stroke-width="1.8"/>

                </svg>
        </body>
</html>

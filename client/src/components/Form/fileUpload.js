import React from "react";

export function FileUpload () {
    return (
            <form action="/upload" method="POST" enctype="multipart/form-data">
                <div class="file-field input-field">
                    <div class="btn">
                        <span>File</span>
                            <input type="file">
                    </div>
                    <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                    </div>
                 </div>
            </form>
            );   
};

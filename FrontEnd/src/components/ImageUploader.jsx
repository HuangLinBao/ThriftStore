import React, { useEffect } from "react";
import "../style/ImageUploader.scss";
import $ from "jquery";
import { Dropzone } from "dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function ImageUploader() {
  useEffect(() => {
    $(document).ready(function () {
      $(document).ready(function () {
        initFileUploader("#zdrop");

        function initFileUploader(target) {
          var previewNode = document.querySelector("#zdrop-template");
          previewNode.id = "";
          var previewTemplate = previewNode.parentNode.innerHTML;
          previewNode.parentNode.removeChild(previewNode);

          var zdrop = new Dropzone(target, {
            url: "/fakeer",
            maxFilesize: 20,
            previewTemplate: previewTemplate,
            autoQueue: true,
            previewsContainer: "#previews",
            clickable: "#upload-label",
          });

          zdrop.on("addedfile", function (file) {
            $(".preview-container").css("visibility", "visible");
            var reader = new FileReader();

            // Add a 'load' event listener to the FileReader object
            reader.addEventListener("load", function () {
              // Get the file name
              console.log(file);
            });
            reader.readAsDataURL(file);

            // Read the file
          });

          zdrop.on("totaluploadprogress", function (progress) {
            var progr = document.querySelector(".progress .determinate");
            if (progr === undefined || progr === null) return;

            progr.style.width = progress + "%";
          });

          zdrop.on("dragenter", function () {
            $(".fileuploader").addClass("active");
          });

          zdrop.on("dragleave", function () {
            $(".fileuploader").removeClass("active");
          });

          zdrop.on("drop", function () {
            $(".fileuploader").removeClass("active");
          });

          var toggle = true;
          /* Preview controller of hide / show */
          $("#controller").click(function () {
            if (toggle) {
              $("#previews").css("visibility", "hidden");
              $("#controller").html("keyboard_arrow_up");
              $("#previews").css("height", "0px");
              toggle = false;
            } else {
              $("#previews").css("visibility", "visible");
              $("#controller").html("keyboard_arrow_down");
              $("#previews").css("height", "initial");
              toggle = true;
            }
          });
        }
      });
    });
  }, []);

  return (
    <>
      <div class="row">
        <div class="col s12">
          {/* <!-- Uploader Dropzone --> */}
          <div id="zdrop" class="fileuploader ">
            <div id="upload-label" style={{ width: 200 }}>
              <i className="material-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CloudUploadIcon fontSize="inheret" />
              </i>
              <span className="title">Upload your images</span>
              <span>or Drag them here </span>
            </div>
          </div>
          {/* <!-- Preview collection of uploaded documents --> */}
          <div className="preview-container">
            <div className="header">
              <span>Uploaded Files</span>
              <i id="controller" class="material-icons">
                keyboard_arrow_down
              </i>
            </div>
            <div className="collection card" id="previews">
              <div className="collection-item clearhack valign-wrapper item-template" id="zdrop-template">
                <div className="left pv zdrop-info" data-dz-thumbnail>
                  <div>
                    <span data-dz-name></span> <span data-dz-size></span>
                  </div>
                  <div className="progress">
                    <div className="determinate" style={{ width: 0 }} data-dz-uploadprogress></div>
                  </div>
                  <div className="dz-error-message">
                    <span data-dz-errormessage></span>
                  </div>
                </div>

                <div className="secondary-content actions">
                  <a href="#!" data-dz-remove class="btn-floating ph red white-text waves-effect waves-light">
                    <i className="material-icons white-text">clear</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

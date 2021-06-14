// Copyright 2021 sfchi
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

$("#year").text(new Date().getFullYear());

// Configure Slider

$(".carousel").carousel({
  interval: 6000,
  pause: "hover",
});

// Lightbox Init
$(document).on("click", '[data-bs-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Video Play
$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto =
        videoSRC +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
});

$('.slider').slick();

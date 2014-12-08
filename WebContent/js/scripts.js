/**
 * 
 */
$body = $("body");

$(document).on({
	ajaxStart : function() {
		$body.addClass("loading");
	},
	ajaxStop : function() {
		$body.removeClass("loading");
	}
});

function positionCodeSel() {
	var selectBox = document.getElementById("posCode");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	var count = parseInt(selectedValue.split(",")[1]);
	$("#pCount").val(count);
	// $("#tCount").val(parseInt(($("#tCount").val()==null ||
	// $("#tCount").val()== "")?"0":$("#tCount").val())+count);
}

function getPatronList() {
	var selectBox = document.getElementById("posCode");
	var selectedValue = selectBox.options[selectBox.selectedIndex].text;
	var tempSelectedValue = selectBox.options[selectBox.selectedIndex].text;
	var selectedValue = tempSelectedValue.split(" || ")[0];
	if (selectedValue === "Select") {
		$("#showAlert").text("Please select a position code").fadeIn().delay(
				2000).fadeOut();
	} else {
		$.ajax({
			type : "POST",
			url : "getPatronsList.jsp",
			data : "posCodeSelected=" + selectedValue,
			success : function(data) {
				$('#patronList').empty();
				var returnMessage = data;
				var patronNames = data.split("|");
				for (var i = 0; i < patronNames.length; i++) {
					$('#patronList').append('<li>' + patronNames[i] + '</li>');
				}
			}
		});
	}
}

function getLabelUsingMailingIDList() {
	var selectBox = document.getElementById("MailingID");
	var selectedValue = selectBox.options[selectBox.selectedIndex].text;
	if (selectedValue === "Select") {
		$("#showAlert").text("Please select a Mailing ID").fadeIn().delay(2000)
				.fadeOut();
	} else {
		$.ajax({
			type : "POST",
			url : "getLabels.jsp",
			data : "mailingID=" + selectedValue, // posCodeSelected
			success : function(data) {
				response = $.parseJSON(data);
				
				var dynatable = $('#printIDs').dynatable({
					dataset : {
						records : response
					}
				}).data('dynatable');
				 
				dynatable.settings.dataset.originalRecords = response;
				dynatable.process();
				
			},
			error : function(response) {
				var responseTextObject = jQuery
						.parseJSON(response.responseText);
			}
		});

	}

}

function addToGrpSel() {

	var selectBox = document.getElementById("posCode");
	var tempSelectedValue = selectBox.options[selectBox.selectedIndex].text;
	var selectedValue = tempSelectedValue.split(" || ")[0];
	if (selectedValue === "Select") {
		$("#showAlert").text("Please select a position code").fadeIn().delay(
				2000).fadeOut();
		return false;
	}

	var itemFound = false;
	$('#grpSelList li').each(function() {

		if ($(this).text() === selectedValue) {
			itemFound = true;
		}

	});

	if (itemFound == true) {
		$("#showAlert").text("Group already exists in the selection").fadeIn()
				.delay(2000).fadeOut();
	} else {
		$.ajax({
			type : "POST",
			url : "addGroupSelections.jsp",
			data : "posCodeSelected=" + encodeURIComponent(selectedValue),
			success : function(data) {

			}
		});
		var selectedCount = selectBox.options[selectBox.selectedIndex].value;
		var count = parseInt(selectedCount.split(",")[1]);
		$("#tCount")
				.val(
						parseInt(($("#tCount").val() == null || $("#tCount")
								.val() == "") ? "0" : $("#tCount").val())
								+ count);
		$('#grpSelList').append('<li>' + selectedValue + '</li>');
	}

}

function setPatronList() {

}

function addMatToSel() {
	var selectBox = document.getElementById("materialSel");
	var selectedValue = selectBox.options[selectBox.selectedIndex].text;
	if (selectedValue === "Select") {
		$("#showAlert").text("Please select a Material").fadeIn().delay(2000)
				.fadeOut();
		return false;
	}

	var itemFound = false;
	$('#matSelList li').each(function() {

		if ($(this).text() === selectedValue) {
			itemFound = true;
		}

	});

	if (itemFound == true) {
		$("#showAlert").text("Material already exists in the selection")
				.fadeIn().delay(2000).fadeOut();
	} else {
		$.ajax({
			type : "POST",
			url : "addMaterialSelections.jsp",
			data : "matSelected=" + encodeURIComponent(selectedValue),
			success : function(data) {

			}
		});
		$('#matSelList').append('<li>' + selectedValue + '</li>');
	}

}

var Example = (function() {
	"use strict";

	var elem, hideHandler, that = {};

	that.init = function(options) {
		elem = $(options.selector);
	};

	that.show = function(text) {
		clearTimeout(hideHandler);

		elem.find("span").html(text);
		elem.delay(200).fadeIn().delay(4000).fadeOut();
	};

	return that;
}());

// Mangesh-->
function checkUserLoginedIndex() {
	$.ajax({
		type : "POST",
		url : "chechAccess.do",
		success : function(data) {
			try {
				var returnMessage = data;
				console.log(returnMessage);
				if (returnMessage == 'false') {
					if (!$('#CreateListAnchor').hasClass('disabled')) {
						$('#CreateListAnchor').addClass('disabled');
						$('#CreateListAnchor').addClass('disabled');
						$("#CreateListAnchor").removeAttr('href');
						$('#warningButn').show();
					}
				} else {
					if ($('#CreateListAnchor').hasClass('disabled')) {
						$('#CreateListAnchor').removeClass('disabled');
						$('#CreateListAnchor').attr("href", "init.do")
						$('#warningButn').hide();
					}
				}
			} catch (err) {

				console.error(err);
			}

		}
	});

}
function checkUserLoginedStart() {
	$
			.ajax({
				type : "POST",
				url : "chechAccess.do",
				success : function(data) {
					try {
						var returnMessage = data;
						console.log(returnMessage);
						if (returnMessage == 'false') {
							alert("Your Session has been terminated\n\tTry Again Later!!");
							window.location = "Index.jsp"
						}
					} catch (err) {

						console.error(err);
					}

				}
			});

}
function invalidateSession() {
	$("#resetForm").val("true");
	$
			.ajax({
				type : "POST",
				url : "invalS.do",
				success : function(data) {
					try {
						// var returnMessage = data;
						$("#showAlert")
								.text(
										"Session has been invalidated by You.\n You can access Create Mailing List Page.")
								.fadeIn().delay(2000).fadeOut(5000);

					} catch (err) {
						console.error(err);
					}

				}
			});

}

// -->Mangesh

function resetForm() {
	$.ajax({
		type : "POST",
		url : "resetForm.jsp",
		success : function() {
			$("#resetForm").val("true");
			window.location.reload();
		}
	});

}


function saveForm(){
	if ($('#grpSelList li').length == 0 && $('#matSelList li').length == 0)  {
		$("#showAlert").text("Please add atleast one Position Code and Material to selection").fadeIn().delay(3000)
				.fadeOut();
		return false;
	}
	if ($('#grpSelList li').length == 0)  {
		$("#showAlert").text("Please add atleast one Position Code to selection").fadeIn().delay(2000)
				.fadeOut();
		return false;
	}
	if ($('#matSelList li').length == 0)  {
		$("#showAlert").text("Please add atleast one Material to selection").fadeIn().delay(2000)
				.fadeOut();
		return false;
	}
	// alert($('#curMailId').val());

	$(".loader").fadeIn("fast");
	$.ajax({
		type : "POST",
		url : "saveForm.jsp",
		data : "mailingID=" + $('#curMailId').val(),
		success : function() {
			$(".loader").fadeOut("slow");
			$("#showAlert").text("Data Saved successfully").fadeIn()
					.delay(2000).fadeOut();

		}
	});

}

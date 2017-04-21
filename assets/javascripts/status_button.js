function make_status(newStatus, userId, authorId) {
	if (typeof(jQuery) != 'undefined') {
		// redmine uses jQuery so use it.
		var $ = jQuery;
		var s = $('#issue_status_id');
		if (s.length === 0) {
			return;
		}
		var f = $('#issue-form');
		if (f.length === 0) {
			return;
		}
		s.val(newStatus);
		$("#send_notification").attr('checked', false);
		// FIXME: add option - not hardcoded
		if ( newStatus == 3 || newStatus == 9 ) {
			$("#issue_done_ratio option[value=100]").attr('selected', true)
			$("#issue_assigned_to_id option[value=" + authorId + "]").attr('selected', true)
		} else if ( newStatus == 2 && userId ) {
			$("#issue_assigned_to_id option[value=" + userId + "]").attr('selected', true);
		}
		f.submit();
	} else {
		// redmine uses prototype so use it.
		var $ = document.getElementById;
		var s = $('issue_status_id');
		if (s === null) {
			return;
		}
		var f = $('issue-form');
		s.value = newStatus;
		f.submit();
	}
};


export default {
  phase: {
    requests: "Requests",
    assignments: "Commission",
    results: "Review",
    shutdown: "Closed",
  },
  request_type: {
    primary: "Primary",
    secondary: "Secondary",
    assignment: "Assignment",
  },
  role: {
    admin: "Administrator",
    commissioner: "Commissioner",
    teacher: "Teacher",
  },
  course: {
    label: "Course | Courses",
    degree: "Degree",
    program: "Program",
    track: "Track",
    semester: "Semester",
    type: "Type",
  },
  teacher: {
    label: "Teacher | Teachers",
    firstname: "First name",
    lastname: "Last name",
    alias: "Alias",
    position: "Position",
    service: "Service",
    base_service_hours: "Base service hours",
    visible: "Visible",
    active: "Active",
    email: "Email",
    coordinator: "Coordinator",
    coordination: "Coordination",
  },
  unit: {
    hours: "h",
    weighted_hours: "wh",
  },
  notify: {
    error: {
      default_caption:
        "If the problem persists, please contact an administrator",
    },
  },
  header: {
    warning: {
      archive: "You are viewing an archive ({year})",
      impersonating: "You are impersonating a teacher ({uid})",
    },
    tooltip: {
      home: "Home",
      teacher: "My information",
      courses: "Courses",
      teachers_filter: "Teachers filter",
      my_requests: "My requests",
      refresh: "Refresh data",
      dark_mode: "Dark mode",
    },
    year: {
      label: "Year",
    },
    lang: {
      label: "Language",
    },
    admin: {
      label: "Administration",
      current_year: "Current year",
      current_phase: "Current phase",
    },
    info: {
      label: "Info",
      contact: {
        label: "Contact",
        message: `
        For any questions, remarks, suggestions for improvements, reporting
        errors or potential bugs, you can use the button below.`,
        button: "Send a message",
      },
      license: {
        label: "License",
        message: `
        <p>
          Geyser &mdash; Projected Teaching Management<br />
          Copyright &copy; 2021-2025 Amaël Broustet, Julien Hauseux
        </p>
        <p>
          Geyser is free software distributed under the terms of the
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.html#license-text"
            target="_blank"
            rel="noopener noreferrer"
            >GNU Affero GPL v3</a
          > license.
        </p>
        <p class="text-italic">
          The GNU Affero General Public License (GNU AGPL) is a modified version
          of the ordinary GNU GPL version 3. It has one added requirement: if you
          run a modified program on a server and let other users communicate with
          it, your server must also let them download the source code corresponding
          to the modified version running there.
        </p>
        <p class="text-right">
          Excerpt from
          <a
            href="https://www.gnu.org/licenses/why-affero-gpl.fr.html"
            target="_blank"
            rel="noopener noreferrer"
            >https://www.gnu.org/licenses/why-affero-gpl.fr.html</a
          >
          on 03/03/2024.
        </p>
        Geyser's source code is available on GitHub:
        <ol>
          <li>
            <a
              href="https://github.com/arkandias/geyser"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/arkandias/geyser</a
            >
          </li>
          <li>
            <a
              href="https://github.com/arkandias/geyser-client"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/arkandias/geyser-client</a
            >
          </li>
        </ol>`,
      },
      legal_notice: {
        label: "Legal notice",
      },
    },
    user: {
      label: "User",
      logout: "Logout",
    },
  },
  profile: {
    status: {
      found: "Profile found",
      not_found: "Profile not found",
    },
  },
  auth: {
    not_authenticated: "You are not authenticated",
    loading_profile: "Loading your profile...",
    profile_load_failed: "Your profile could not be loaded",
    profile_inactive: "Your profile is not active",
    loading_phase: "Loading current phase...",
    system_closed: "Geyser is currently closed",
  },
  home: {
    welcome: "Welcome",
    subtitle: {
      requests: "Geyser is in the requests phase",
      assignments: "Commission work is in progress",
      results: "Geyser is in the review phase",
      shutdown: "Geyser is closed",
    },
    message: {
      requests: `
      <p>
        Please verify that your base service (below) is correct. If not, contact
        a commission member. Then add any service modifications (delegation,
        discharge, leave, etc.).
        <b>
          The total shown should correspond to the number of TD equivalent hours
          that the commission must assign you with available courses in Geyser.
        </b>
      </p>
      <p>
        You can then make primary and secondary requests on the Courses page
        (icon <QIcon name="sym_s_menu_book" /> in the header). Please request
        the equivalent of your total service in primary and secondary requests.
      </p>
      <p>
        Finally, you have the option to leave a message for the commission to
        bring to their attention any information you deem useful for their work.
        This message will only be visible to the commission and yourself. To
        modify your message, click on the
        <QBtn icon="sym_s_edit" color="primary" size="xs" flat square dense />
        button that appears next to the corresponding section title.
      </p>`,
      assignments: `
      Commission work is in progress. You will be notified when it is complete
      to review the assignments. In the meantime, you can still view requests
      but they can no longer be modified.`,
      results: `
      You can now view the course assignments for this year. You also still
      have access to requests and assignments from previous years.`,
      shutdown: "",
    },
  },
  editor: {
    button: {
      save: "Save",
      cancel: "Cancel",
    },
    save: {
      no_changes: "No changes to save",
      success: {
        updated: "Text updated",
        deleted: "Text deleted",
      },
      error: {
        update: "Update failed",
        delete: "Delete failed",
      },
    },
  },
  request_card: {
    group: "group | groups",
    hour: "hour | hours",
    tooltip: {
      assign: "Assign request",
      remove: "Remove request",
    },
  },
  request_form: {
    invalid: {
      message: "Invalid form",
      caption: {
        no_teacher: "Select a teacher",
        negative_hours: "Select a non-negative number of hours",
        no_type: "Select a request type",
      },
    },
    tooltip: {
      submit: "Submit request",
    },
  },
  request: {
    type: {
      assignment: "Assignment",
      primary: "Primary request",
      secondary: "Secondary request",
    },
    error: {
      course_not_found: "Error retrieving course",
      service_not_found: {
        title: "No service found",
        caption: "Please create a service first",
      },
      fetch: "Error retrieving current request",
      invalid_type: "Invalid request type",
      create: "Creation failed",
      update: "Update failed",
      delete: "Delete failed",
    },
    success: {
      already_recorded: "{type} already recorded",
      created: "{type} created",
      updated: "{type} updated",
      deleted: "{type} deleted",
    },
  },
  download_assignments: {
    error: "Error retrieving assignments",
  },
};

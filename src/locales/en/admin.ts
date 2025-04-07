export default {
  admin: {
    data: {
      button: {
        create: "Create",
        edit: "Edit",
        update: "Update",
        delete: "Delete",
        import: "Import",
        export: "Export",
      },
      search: "Search…",
      error: {
        unknownError: "Unknown error",
        invalidForm: "Invalid form",
        emptyField: 'The field "{field}" is required',
        notANumber: 'The field "{field}" is not a valid number',
        insertFailed: "Creation failed",
        updateFailed: "Update failed",
        deleteFailed: "Deletion failed",
        importFailed: "Import failed",
        exportFailed: "Export failed",
        insertError: "Error while inserting data: {reason}",
        updateError: "Error while updating data: {reason}",
        deleteError: "Error while deleting data: {reason}",
        noReturnData: "No response",
        emptyFile: "Empty file",
        unreadableFile: "Unreadable file: {reason}",
        parsingError: "Error while extracting data: {reason}",
        invalidRow: "Invalid row {index}: {reason}",
      },
      import: {
        title: "Import from CSV file",
        csvInstructions: `
          To be valid, the CSV file must follow these rules:
          <ul>
            <li>The file must contain exactly the columns listed in the table below, all are mandatory.</li>
            <li>Column names must be written exactly as shown in the table (in lowercase).</li>
            <li>Values must be separated by commas.</li>
            <li>Texts containing commas must be enclosed in double quotes.</li>
            <li>If a text contains double quotes, they must be doubled (e.g.: "He said: ""Hello""")</li>
            <li>Numbers must use a period as the decimal separator and must not contain spaces (e.g.: 1234.56).</li>
            <li>Boolean values must be written as "true" or "false" (in lowercase)</li>
          </ul>`,
        table: {
          columns: {
            key: "Name",
            type: "Type",
            nonNullable: "Required",
          },
          type: {
            string: "text",
            number: "number",
            boolean: "boolean",
          },
        },
        filePickerLabel: "Select a CSV file",
        overwrite: "Overwrite data in case of conflict",
      },
    },
    general: {
      title: "General Settings",
      phase: {
        label: "Current phase",
        error: {
          setCurrent: "Failed to update current phase",
        },
        success: {
          setCurrent: "Current phase updated",
        },
      },
      years: {
        label: "Years",
        year: "Year",
        visible: "Visible",
        current: "Current",
        button: {
          create: "Create",
          update: "Update",
          createServices: "Create services for active teachers",
          copyCourses: "Copy courses from previous year",
          computePriorities: "Compute priorities",
        },
        confirm: {
          delete: `Are you sure you want to delete the year {year}?
If courses or services are associated with this year, you will not be able to delete it.`,
        },
        error: {
          setCurrent: "Failed to update current year",
          createServices: "Failed to create services",
          copyCourses: "Failed to copy courses",
          computePriorities: "Failed to compute priorities",
          emptyValue: "Enter a value for the year",
          emptyVisibility: "Select the visibility of the year",
        },
        success: {
          setCurrent: "Current year updated",
          insert: "Year created",
          update: "Year updated",
          delete: "Year deleted",
          createServices:
            "0 service created | 1 service created | {count} services created",
          copyCourses: "0 cours copied | 1 cours copied | {count} cours copied",
          computePriorities:
            "0 priorité computed | 1 priorité computed | {count} priorités computed",
        },
      },
      customTexts: {
        label: "Interface customization",
        button: {
          edit: "Edit",
          delete: "Delete",
        },
        contact: "Contact",
        legalNotice: "Legal notice",
        homeTitle: "Homepage title",
        homeSubtitleRequests: "Homepage subtitle during request phase",
        homeSubtitleAssignments: "Homepage subtitle during assignment phase",
        homeSubtitleResults: "Homepage subtitle during results phase",
        homeSubtitleShutdown: "Homepage subtitle during shutdown phase",
        homeMessageRequests: "Homepage message during request phase",
        homeMessageAssignments: "Homepage message during assignment phase",
        homeMessageResults: "Homepage message during results phase",
        homeMessageShutdown: "Homepage message during shutdown phase",
      },
    },
    teachers: {
      title: "Teachers",
      teachers: {
        label: "Teachers",
        table: {
          columns: {
            uid: "Email",
            firstname: "First name",
            lastname: "Last name",
            alias: "Alias",
            position: "Position",
            baseServiceHours: "Base service (@:unit.weightedHours)",
            visible: "Visible",
            active: "Active",
          },
        },
        form: {
          title: {
            none: "New teacher",
            single: "{label}",
            multiple: "{count} teachers selected",
          },
          fields: {
            uid: "Email",
            firstname: "First name",
            lastname: "Last name",
            alias: "Alias",
            position: "Position",
            baseServiceHours: "Base service (@:unit.weightedHours)",
            visible: "Visible",
            active: "Active",
          },
          error: {
            conflictEmail: 'A user with email "{uid}" already exists',
            positionNotFound: 'No position exists with the label "{position}"',
            baseServiceHoursNegative:
              "Enter a positive or zero number of base service hours",
          },
        },
        data: {
          success: {
            insert:
              "No teacher created | Teacher created | {count} teachers created",
            update:
              "No teacher updated | Teacher updated | {count} teachers updated",
            delete:
              "No teacher deleted | Teacher deleted | {count} teachers deleted",
            import:
              "0 teacher imported | 1 teacher imported | {count} teachers imported",
            export:
              "0 teacher exported | 1 teacher exported | {count} teachers exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the teacher "{label}"?
If there are services, responsibilities, or roles for this teacher, you will not be able to delete them.`,
              multiple: `Are you sure you want to delete the {count} selected teachers?
If there are services, responsibilities, or roles for these teachers, you will not be able to delete them.`,
            },
          },
        },
      },
      positions: {
        label: "Positions",
        table: {
          columns: {
            label: "Label",
            description: "Description",
            baseServiceHours: "Base service (@:unit.weightedHours)",
          },
        },
        form: {
          title: {
            none: "New position",
            single: "{label}",
            multiple: "{count} positions selected",
          },
          fields: {
            label: "Label",
            description: "Description",
            baseServiceHours: "Base service (@:unit.weightedHours)",
          },
          error: {
            conflictLabel: 'A position with the label "{label}" already exists',
            hoursNegative:
              "Enter a positive or zero number of base service hours",
          },
        },
        data: {
          success: {
            insert:
              "No position created | Position created | {count} positions created",
            update:
              "No position updated | Position updated | {count} positions updated",
            delete:
              "No position deleted | Position deleted | {count} positions deleted",
            import:
              "0 position imported | 1 position imported | {count} positions imported",
            export:
              "0 position exported | 1 position exported | {count} positions exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the position "{label}"?
If this position is assigned to teachers, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected positions?
If these positions are assigned to teachers, you will not be able to delete them.`,
            },
          },
        },
      },
      services: {
        label: "Services",
        table: {
          columns: {
            year: "Year",
            uid: "Teacher",
            hours: "Hours (@:unit.weightedHours)",
            message: "Message",
          },
        },
        form: {
          title: {
            none: "New service",
            single: "{label}",
            multiple: "{count} services selected",
          },
          fields: {
            year: "Year",
            uid: "Instructor",
            hours: "Hours (@:unit.weightedHours)",
            message: "Message",
          },
          error: {
            updateYearWithoutUid:
              "You cannot modify the year without selecting a teacher",
            updateUidWithoutYear:
              "You cannot modify the teacher without selecting a year",
            conflictYearUid:
              "A service already exists for teacher {uid} and year {year}",
            hoursNegative: "Enter a positive or zero number of hours",
          },
        },
        data: {
          success: {
            insert:
              "No service created | Service created | {count} services created",
            update:
              "No service updated | Service updated | {count} services updated",
            delete:
              "No service deleted | Service deleted | {count} services deleted",
            import:
              "0 service imported | 1 service imported | {count} services imported",
            export:
              "0 service exported | 1 service exported | {count} services exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the service "{label}"?
If there are modifications, requests, or priorities for this service, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected services?
If there are modifications, requests, or priorities for these services, you will not be able to delete them.`,
            },
          },
        },
      },
      serviceModifications: {
        label: "Service modifications",
        table: {
          columns: {
            year: "Year",
            uid: "Instructor",
            type: "Type",
            hours: "Hours (@:unit.weightedHours)",
          },
        },
        form: {
          title: {
            none: "New service modification",
            single: "{label}",
            multiple: "{count} service modifications selected",
          },
          fields: {
            year: "Year",
            uid: "Instructor",
            type: "Type",
            hours: "Hours (@:unit.weightedHours)",
          },
          error: {
            updateYearWithoutUid:
              "You cannot modify the year without selecting a teacher",
            updateUidWithoutYear:
              "You cannot modify the teacher without selecting a year",
            serviceNotFound:
              "No service exists for teacher {uid} and year {year}",
            typeNotFound:
              'No service modification with the label "{type}" exists',
          },
        },
        data: {
          success: {
            insert:
              "No service modification created | Service modification created | {count} service modifications created",
            update:
              "No service modification updated | Service modification updated | {count} service modifications updated",
            delete:
              "No service modification deleted | Service modification deleted | {count} service modifications deleted",
            import:
              "0 service modification imported | 1 service modification imported | {count} service modifications imported",
            export:
              "0 service modification exported | 1 service modification exported | {count} service modifications exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the service modification "{label}"?`,
              multiple: `Are you sure you want to delete the {count} selected service modifications?`,
            },
          },
        },
      },
      serviceModificationTypes: {
        label: "Service modification types",
        table: {
          columns: {
            label: "Label",
            description: "Description",
          },
        },
        form: {
          title: {
            none: "New modification type",
            single: "{label}",
            multiple: "{count} modification types selected",
          },
          fields: {
            label: "Label",
            description: "Description",
          },
          error: {
            conflictLabel:
              'A modification type with the label "{label}" already exists',
          },
        },
        data: {
          success: {
            insert:
              "No modification type created | Modification type created | {count} modification types created",
            update:
              "No modification type updated | Modification type updated | {count} modification types updated",
            delete:
              "No modification type deleted | Modification type deleted | {count} modification types deleted",
            import:
              "0 modification type imported | 1 modification type imported | {count} modification types imported",
            export:
              "0 modification type exported | 1 modification type exported | {count} modification types exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the modification type "{label}"?
If this type is assigned to modifications, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected modification types?
If these types are assigned to modifications, you will not be able to delete them.`,
            },
          },
        },
      },
    },
    courses: {
      title: "Courses",
      degrees: {
        label: "Degrees",
        table: {
          columns: {
            name: "Name",
            nameShort: "Short name",
            visible: "Visible",
          },
        },
        form: {
          title: {
            none: "New degree",
            single: "{label}",
            multiple: "{count} degrees selected",
          },
          fields: {
            name: "Name",
            nameShort: "Short name",
            visible: "Visible",
          },
          error: {
            conflictName: 'A degree with the name "{name}" already exists',
          },
        },
        data: {
          success: {
            insert:
              "No degree created | Degree created | {count} degrees created",
            update:
              "No degree updated | Degree updated | {count} degrees updated",
            delete:
              "No degree deleted | Degree deleted | {count} degrees deleted",
            import:
              "0 degree imported | 1 degree imported | {count} degrees imported",
            export:
              "0 degree exported | 1 degree exported | {count} degrees exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the degree "{label}"?
If this degree contains programs, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected degrees?
If these degrees contain programs, you will not be able to delete them.`,
            },
          },
        },
      },
      programs: {
        label: "Programs",
        table: {
          columns: {
            degree: "Degree",
            name: "Name",
            nameShort: "Short name",
            visible: "Visible",
          },
        },
        form: {
          title: {
            none: "New program",
            single: "{label}",
            multiple: "{count} programs selected",
          },
          fields: {
            degree: "Degree",
            name: "Name",
            nameShort: "Short name",
            visible: "Visible",
          },
          error: {
            degreeNotFound: 'No degree with the name "{degree}" exists',
            conflictDegreeName:
              'A program in the degree "{degree}" with the name "{name}" already exists',
          },
        },
        data: {
          success: {
            insert:
              "No program created | Program created | {count} programs created",
            update:
              "No program updated | Program updated | {count} programs updated",
            delete:
              "No program deleted | Program deleted | {count} programs deleted",
            import:
              "0 program imported | 1 program imported | {count} programs imported",
            export:
              "0 program exported | 1 program exported | {count} programs exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the program "{label}"?
If there are tracks, courses, or coordinators for this program, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected programs?
If there are tracks, courses, or coordinators for these programs, you will not be able to delete them.`,
            },
          },
        },
      },
      tracks: {
        label: "Tracks",
        table: {
          columns: {
            degree: "Degree",
            program: "Program",
            name: "Name",
            nameShort: "Short name",
            visible: "Visible",
          },
        },
        form: {
          title: {
            none: "New track",
            single: "{label}",
            multiple: "{count} tracks selected",
          },
          fields: {
            degree: "Degree",
            program: "Program",
            name: "Name",
            nameShort: "Short name",
            visible: "Visible",
          },
          error: {
            updateDegreeWithoutProgram:
              "You cannot modify the degree without selecting a program",
            updateProgramWithoutDegree:
              "You cannot modify the program without selecting a degree",
            degreeNotFound: 'No degree with the name "{degree}" exists',
            programNotFound:
              'No program in the degree "{degree}" with the name "{program}" exists',
            conflictProgramName:
              'A track in the program "{program}" of the degree "{degree}" with the name "{name}" already exists',
          },
        },
        data: {
          success: {
            insert: "No track created | Track created | {count} tracks created",
            update: "No track updated | Track updated | {count} tracks updated",
            delete: "No track deleted | Track deleted | {count} tracks deleted",
            import:
              "0 track imported | 1 track imported | {count} tracks imported",
            export:
              "0 track exported | 1 track exported | {count} tracks exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the track "{label}"?
If there are courses or coordinators for this track, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected tracks?
If there are courses or coordinators for these tracks, you will not be able to delete them.`,
            },
          },
        },
      },
      courses: {
        label: "Courses",
        table: {
          columns: {
            year: "Year",
            degree: "Degree",
            program: "Program",
            track: "Track",
            name: "Name",
            nameShort: "Short name",
            semester: "Semester",
            type: "Type",
            hours: "Hrs.",
            hoursAdjusted: "Adj. hrs.",
            groups: "Grps.",
            groupsAdjusted: "Adj. grps.",
            description: "Description",
            priorityRule: "Priority",
            visible: "Visible",
          },
        },
        form: {
          title: {
            none: "New course",
            single: "{label}",
            multiple: "{count} courses selected",
          },
          fields: {
            year: "Year",
            degree: "Degree",
            program: "Program",
            track: "Track",
            name: "Name",
            nameShort: "Short name",
            semester: "Semester",
            type: "Course type",
            hours: "Number of hours per group",
            hoursAdjusted: "Adjusted number of hours per group",
            groups: "Number of groups",
            groupsAdjusted: "Adjusted number of groups",
            description: "Description",
            priorityRule: "Priority rule",
            visible: "Visible",
          },
          error: {
            updateDegreeWithoutProgram:
              "You cannot modify the degree without selecting a program",
            updateProgramWithoutDegree:
              "You cannot modify the program without selecting a degree",
            updateTrackWithoutProgram:
              "You cannot modify the track without selecting a program",
            updateTrackWithoutDegree:
              "You cannot modify the track without selecting a degree",
            degreeNotFound: 'No degree with the name "{degree}" exists',
            programNotFound:
              'No program in the degree "{degree}" with the name "{program}" exists',
            trackNotFound:
              'No track in the program "{program}" of the degree "{degree}" with the name "{track}" exists',
            courseTypeNotFound: 'No course type with the label "{type}" exists',
            conflictYearProgramTrackNameSemesterType:
              'A {type} in semester {semester} with the name "{name}" in the track "{track}" of the program "{program}" of the degree "{degree}" for year {year} already exists',
            hoursNegative: "Enter a positive or zero number of hours",
            hoursAdjustedNegative:
              "Enter a positive or zero adjusted number of hours",
            groupsNegative: "Enter a positive or zero number of groups",
            groupsAdjustedNegative:
              "Enter a positive or zero adjusted number of groups",
            priorityRule:
              "The priority rule must be a positive integer or zero",
          },
        },
        data: {
          success: {
            insert:
              "No course created | Course created | {count} courses created",
            update:
              "No course updated | Course updated | {count} courses updated",
            delete:
              "No course deleted | Course deleted | {count} courses deleted",
            import:
              "0 course imported | 1 course imported | {count} courses imported",
            export:
              "0 course exported | 1 course exported | {count} courses exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the course "{label}"?
If there are requests, priorities, or coordinators for this course, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected tracks?
If there are requests, priorities, or coordinators for these courses, you will not be able to delete them.`,
            },
          },
        },
      },
      types: {
        label: "Course types",
        table: {
          columns: {
            label: "Label",
            coefficient: "Coefficient",
            description: "Description",
          },
        },
        form: {
          title: {
            none: "New course type",
            single: "{label}",
            multiple: "{count} course types selected",
          },
          fields: {
            label: "Label",
            coefficient: "Coefficient",
            description: "Description",
          },
          error: {
            conflictLabel:
              'A course type with the label "{label}" already exists',
          },
        },
        data: {
          success: {
            insert:
              "No course type created | Course type created | {count} course types created",
            update:
              "No course type updated | Course type updated | {count} course types updated",
            delete:
              "No course type deleted | Course type deleted | {count} course types deleted",
            import:
              "0 course type imported | 1 course type imported | {count} course types imported",
            export:
              "0 course type exported | 1 course type exported | {count} course types exported",
          },
          confirm: {
            delete: {
              single: `Are you sure you want to delete the course type "{label}"?
If this type is assigned to courses, you will not be able to delete it.`,
              multiple: `Are you sure you want to delete the {count} selected course types?
If these types are assigned to courses, you will not be able to delete them.`,
            },
          },
        },
      },
    },
    requests: {
      title: "Requests and priorities",
      requests: {
        label: "Requests",
      },
      priorities: {
        label: "Priorities",
      },
    },
    roles: {
      title: "Roles and responsibilities",
      admin: "Administrators",
      commissioners: "Commissioners",
      coordinations: {
        programs: "Program coordinators",
        tracks: "Track coordinators",
        courses: "Course coordinators",
      },
    },
  },
} as const;

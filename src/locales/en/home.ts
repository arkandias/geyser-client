import { PHASES } from "@/config/types/phases.ts";

export default {
  home: {
    title: "Welcome",
    subtitle: {
      [PHASES.REQUESTS]: "Geyser is in request phase",
      [PHASES.ASSIGNMENTS]: "Geyser is in assignment phase",
      [PHASES.RESULTS]: "Geyser is in results phase",
      [PHASES.SHUTDOWN]: "Geyser is closed",
    },
    message: {
      [PHASES.REQUESTS]: `
        <p>
          On the <i class="q-icon text-primary material-symbols-sharp">badge</i>
          My Information page, enter your base service (in teaching equivalent hours), then add
          any service modifications (delegation, release, leave, etc.).
          <b>
            The total shown should correspond to the number of teaching equivalent hours that the commission
            needs to assign to you from the courses available on Geyser.
          </b>
        </p>
        <p>
          You can then make primary and secondary requests on the
          <i class="q-icon text-primary material-symbols-sharp">menu_book</i>
          Courses page. Please request the equivalent of your total service in
          both primary and secondary requests.
        </p>`,
      [PHASES.ASSIGNMENTS]: `
        <p>
          The commission's work is in progress. You will be informed when it
          is complete so you can view the assignments.
          In the meantime, you can still view requests but it is no longer
          possible to modify them.
        </p>`,
      [PHASES.RESULTS]: `
        <p>
          You can now view the course assignments for this
          year. You also still have access to requests and assignments from
          previous years.
        </p>`,
      [PHASES.SHUTDOWN]: "",
    },
    alert: {
      noAuth: "You are not authenticated",
      loadingProfile: "Loading your profile…",
      profileNotLoaded: "Your profile could not be loaded",
      profileNotActive: "Your profile is not active",
      loadingAppData: "Loading application settings…",
      shutdown: "Geyser is currently closed",
      pageNotFound: "Page not found",
    },
  },
} as const;

const Route = {
    HOME: '/',
    REGISTER: '/register',
    PUBLIC_REGISTER: '/user/register',
    ORGANISER_REGISTER: '/organizer/register',
    LOGIN: '/login',
    PUBLIC_LOGIN: '/user/login',
    ORGANISER_LOGIN: '/organizer/login',
    EVENTS: '/evenements',
    MANAGER_DASH: '/organizer/dashboard',
    USER_DASH: '/user/dashboard',
    MANAGER_ACCOUNT_MANAGER: '/organizer/dashboard/compte/parametre',
    USER_ACCOUNT_MANAGER: '/user/dashboard/compte/parametre',
    MANAGER_VIEW_EVENT: '/organizer/dashboard/myevent/:id',
    MANAGER_UPDATE_EVENT: '/organizer/dashboard/myevent/:id/edit',
}

export default Route;
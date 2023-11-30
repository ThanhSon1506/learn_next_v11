export type IBreadcrumbList = Array<IBreadcrumb>

export interface IBreadcrumb {
    key: string
    name: string
    children?: Array<IBreadcrumb>
}
